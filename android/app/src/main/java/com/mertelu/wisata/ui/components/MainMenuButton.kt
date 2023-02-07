package com.mertelu.wisata.ui.components

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.mertelu.wisata.R
import com.mertelu.wisata.ui.theme.*

@Composable
fun MainMenuButton(
    @StringRes title: Int,
    @DrawableRes icon: Int,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier,
    ) {
        Card(
            shape = Shapes.small,
            elevation = 0.dp,
            modifier = Modifier
                .size(80.dp)
                .clickable { onClick() },
        ) {
            Box(
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    painter = painterResource(icon),
                    contentDescription = stringResource(title),
                    tint = Green,
                    modifier = Modifier
                        .size(40.dp),
                )
            }
        }
        Text(
            text = stringResource(title),
            textAlign = TextAlign.Center,
            style = Typography.button,
            color = White,
            modifier = Modifier
                .padding(top = 16.dp),
        )
    }
}

@Preview(showBackground = true)
@Composable
fun MainMenuButtonPreview() {
    DesaWisataMerteluTheme {
        MainMenuButton(
            title = R.string.btn_reservation_home,
            icon = R.drawable.ic_reservation_24,
            onClick = {},
        )
    }
}