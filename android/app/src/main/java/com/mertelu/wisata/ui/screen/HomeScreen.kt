package com.mertelu.wisata.ui.screen

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import com.mertelu.wisata.R
import com.mertelu.wisata.data.local.AttractionData
import com.mertelu.wisata.data.model.Attraction
import com.mertelu.wisata.ui.components.AttractionItem
import com.mertelu.wisata.ui.components.IconText
import com.mertelu.wisata.ui.components.MainMenuButton
import com.mertelu.wisata.ui.theme.Green
import com.mertelu.wisata.ui.theme.Typography
import com.mertelu.wisata.ui.theme.White
import com.mertelu.wisata.util.showToast
import io.github.g00fy2.quickie.QRResult
import io.github.g00fy2.quickie.ScanCustomCode
import io.github.g00fy2.quickie.config.ScannerConfig

@Composable
fun HomeScreen(
    modifier: Modifier = Modifier,
    attractionList: List<Attraction> = AttractionData.get(),
    navigateToMaps: (String) -> Unit,
    navigateToPlantDetails: (Long) -> Unit,
    navigateToReservation: () -> Unit,
) {
    HomeContent(
        attractionList = attractionList,
        modifier = modifier,
        navigateToMaps = navigateToMaps,
        navigateToPlantDetails = navigateToPlantDetails,
        navigateToReservation = navigateToReservation,
    )
}

@Composable
private fun HomeContent(
    attractionList: List<Attraction>,
    modifier: Modifier = Modifier,
    navigateToMaps: (String) -> Unit,
    navigateToPlantDetails: (Long) -> Unit,
    navigateToReservation: () -> Unit,
) {
    Column(
        modifier = modifier,
    ) {
        HomeHeader(
            navigateToPlantDetails = navigateToPlantDetails,
            navigateToReservation = navigateToReservation,
        )
        HomeList(
            attractionList = attractionList,
            navigateToMaps = navigateToMaps,
        )
    }
}

@Composable
private fun HomeHeader(
    modifier: Modifier = Modifier,
    navigateToPlantDetails: (Long) -> Unit,
    navigateToReservation: () -> Unit,
) {
    val context = LocalContext.current
    
    Column(
        modifier = modifier
            .background(
                color = Green,
                shape = RoundedCornerShape(bottomEnd = 42.dp, bottomStart = 42.dp),
            )
            .padding(24.dp),
    ) {
        Text(
            text = stringResource(R.string.lbl_welcome_home),
            style = Typography.h6,
            color = White,
        )
        Text(
            text = stringResource(R.string.lbl_mertelu_home),
            style = Typography.h5,
            color = White,
        )
        IconText(
            text = R.string.lbl_location_home,
            textStyle = Typography.body2,
            textColor = White,
            icon = R.drawable.ic_location_24,
            iconSize = DpSize(16.dp, 16.dp),
            iconPadding = 4.dp,
            iconColor = White,
            modifier = Modifier
                .padding(top = 16.dp),
        )
        
        Spacer(modifier = Modifier.height(52.dp))
        
        Row(
            horizontalArrangement = Arrangement.SpaceEvenly,
            modifier = Modifier
                .fillMaxWidth(),
        ) {
            val scanQrCodeLauncher = rememberLauncherForActivityResult(ScanCustomCode()) { result ->
                when (result) {
                    is QRResult.QRSuccess -> {
                        val url = result.content.rawValue
                        val validUrl = url?.contains("mertelu.com")
                        if (validUrl == true) {
                            val plantId = url.substringAfterLast("/").toLong()
                            navigateToPlantDetails(plantId)
                        } else {
                            context.showToast(R.string.toast_failed_invalid_qr_code_home)
                        }
                    }
                    
                    is QRResult.QRError -> {
                        context.showToast(R.string.toast_failed_error_qr_code_home)
                    }
                    
                    QRResult.QRMissingPermission -> {
                        context.showToast(R.string.toast_failed_scan_not_allowed_home)
                    }
                    
                    QRResult.QRUserCanceled -> {}
                }
            }
            
            MainMenuButton(
                title = R.string.btn_plant_scanner_home,
                icon = R.drawable.ic_plant_scanner_24,
                onClick = {
                    scanQrCodeLauncher.launch(
                        ScannerConfig.build {
                            setOverlayStringRes(R.string.lbl_scan_qr_code_home)
                            setOverlayDrawableRes(R.drawable.ic_plant_24)
                            setShowTorchToggle(true)
                            setShowCloseButton(true)
                        }
                    )
                },
            )
            MainMenuButton(
                title = R.string.btn_reservation_home,
                icon = R.drawable.ic_reservation_24,
                onClick = {
                    navigateToReservation()
                },
            )
        }
        
        Spacer(modifier = Modifier.height(16.dp))
    }
}

@Composable
private fun HomeList(
    attractionList: List<Attraction>,
    modifier: Modifier = Modifier,
    navigateToMaps: (String) -> Unit,
) {
    Column(
        modifier = modifier
            .padding(24.dp),
    ) {
        IconText(
            text = R.string.lbl_title_attraction_home,
            textStyle = Typography.h5,
            icon = R.drawable.ic_attraction_24,
            iconSize = DpSize(42.dp, 42.dp),
            iconPadding = 12.dp,
        )
        
        Text(
            text = stringResource(R.string.lbl_sub_attraction_home),
            modifier = Modifier
                .padding(top = 8.dp),
        )
        
        Spacer(modifier = Modifier.height(24.dp))
        
        LazyColumn(
            verticalArrangement = Arrangement.spacedBy(24.dp),
        ) {
            items(attractionList, key = { it.name }) { data ->
                AttractionItem(
                    name = data.name,
                    description = data.description,
                    imageUrl = data.imageUrl,
                    onClick = { navigateToMaps(data.mapsUrl) },
                )
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun HomeScreenPreview() {
    val attractionList = AttractionData.get()
    HomeScreen(
        attractionList = attractionList,
        navigateToPlantDetails = {},
        navigateToReservation = {},
        navigateToMaps = {},
    )
}