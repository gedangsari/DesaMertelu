package com.mertelu.wisata.ui.components

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import com.mertelu.wisata.R
import com.mertelu.wisata.ui.theme.Black
import com.mertelu.wisata.ui.theme.DesaWisataMerteluTheme
import com.mertelu.wisata.ui.theme.Typography

@Composable
fun IconText(
    @StringRes text: Int,
    textStyle: TextStyle,
    @DrawableRes icon: Int,
    iconSize: DpSize,
    iconPadding: Dp,
    modifier: Modifier = Modifier,
    textColor: Color = Black,
    iconColor: Color = Black,
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = modifier,
    ) {
        Icon(
            painter = painterResource(icon),
            contentDescription = null,
            tint = iconColor,
            modifier = Modifier
                .size(iconSize),
        )
        Text(
            text = stringResource(text),
            style = textStyle,
            color = textColor,
            modifier = Modifier
                .padding(start = iconPadding),
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun IconTextPreview() {
    DesaWisataMerteluTheme {
        IconText(
            text = R.string.lbl_title_attraction_home,
            textStyle = Typography.h5,
            icon = R.drawable.ic_attraction_24,
            iconSize = DpSize(42.dp, 42.dp),
            iconPadding = 12.dp,
        )
    }
}