package com.mertelu.wisata.ui.screen

import android.annotation.SuppressLint
import android.view.ViewGroup
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.viewinterop.AndroidView

@Composable
fun PlantDetailsScreen(
    plantId: Long,
    modifier: Modifier = Modifier,
) {
    PlantDetailsContent(
        plantId = plantId,
        modifier = modifier,
    )
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun PlantDetailsContent(
    plantId: Long,
    modifier: Modifier = Modifier,
) {
    AndroidView(
        factory = {
            WebView(it).apply {
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )
                webViewClient = WebViewClient()
            }
        },
        update = { webView ->
            webView.settings.javaScriptEnabled = true

            val detailsUrl = "https://mertelu.com/plants/$plantId"
            webView.loadUrl(detailsUrl)
        },
        modifier = modifier,
    )
}

@Preview(showBackground = true)
@Composable
fun PlantDetailsScreenPreview() {
    // TODO: adjust URL
    val plantId = 1L
    PlantDetailsScreen(
        plantId = plantId,
    )
}