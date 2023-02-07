package com.mertelu.wisata

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Surface
import androidx.compose.ui.Modifier
import com.mertelu.wisata.ui.theme.DesaWisataMerteluTheme
import com.mertelu.wisata.ui.theme.White

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DesaWisataMerteluTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = White,
                ) {
                    DesaWisataMerteluApp()
                }
            }
        }
    }
}