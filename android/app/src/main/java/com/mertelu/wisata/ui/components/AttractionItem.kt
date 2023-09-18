package com.mertelu.wisata.ui.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.mertelu.wisata.R
import com.mertelu.wisata.data.local.AttractionData
import com.mertelu.wisata.ui.theme.Black
import com.mertelu.wisata.ui.theme.DesaWisataMerteluTheme

@Composable
fun AttractionItem(
    name: String,
    description: String,
    imageUrl: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(12.dp))
            .clickable { onClick() },
    ) {
        AsyncImage(
            model = ImageRequest.Builder(LocalContext.current)
                .data(imageUrl)
                .placeholder(R.drawable.ic_placeholder_24)
                .error(R.drawable.ic_placeholder_24)
                .crossfade(true)
                .build(),
            contentDescription = null,
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .clip(RoundedCornerShape(12.dp))
                .size(width = 150.dp, height = 75.dp),
        )
        
        Column(
            modifier = Modifier
                .padding(start = 16.dp)
                .weight(1f),
        ) {
            Text(
                text = name,
                style = MaterialTheme.typography.h6,
            )
            Text(
                text = description,
                style = MaterialTheme.typography.body2,
            )
        }
        
        Icon(
            painter = painterResource(R.drawable.ic_next_24),
            contentDescription = stringResource(R.string.btn_cd_attraction_details_attractionitem),
            tint = Black,
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun AttractionItemPreview() {
    DesaWisataMerteluTheme {
        val attraction = AttractionData.get().first()
        AttractionItem(
            name = attraction.name,
            description = attraction.description,
            imageUrl = attraction.imageUrl,
            onClick = {},
        )
    }
}