package com.mertelu.wisata

import androidx.compose.foundation.layout.padding
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.mertelu.wisata.ui.navigation.Screen
import com.mertelu.wisata.ui.screen.HomeScreen
import com.mertelu.wisata.ui.screen.PlantDetailsScreen
import com.mertelu.wisata.ui.theme.DesaWisataMerteluTheme
import com.mertelu.wisata.util.RESERVATION_PHONE_NUMBER
import com.mertelu.wisata.util.openBrowser
import com.mertelu.wisata.util.openWhatsApp

@Composable
fun DesaWisataMerteluApp(
    modifier: Modifier = Modifier,
    navController: NavHostController = rememberNavController(),
) {
    val context = LocalContext.current

    Scaffold(
        modifier = modifier,
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.Home.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Screen.Home.route) {
                HomeScreen(
                    navigateToPlantDetails = { detailsUrl ->
                        navController.navigate(Screen.PlantDetails.createRoute(detailsUrl))
                    },
                    navigateToReservation = {
                        context.openWhatsApp(RESERVATION_PHONE_NUMBER)
                    },
                    navigateToMaps = { mapsUrl ->
                        context.openBrowser(mapsUrl)
                    },
                )
            }
            composable(
                route = Screen.PlantDetails.route,
                arguments = listOf(navArgument("plantId") { type = NavType.LongType })
            ) {
                val plantId = it.arguments?.getLong("plantId") ?: -1
                PlantDetailsScreen(
                    plantId = plantId,
                )
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun DesaWisataMerteluAppPreview() {
    DesaWisataMerteluTheme {
        DesaWisataMerteluApp()
    }
}