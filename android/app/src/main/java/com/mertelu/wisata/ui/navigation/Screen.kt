package com.mertelu.wisata.ui.navigation

sealed class Screen(val route: String) {
    object Home : Screen("home")
    object PlantDetails : Screen("plant_details/{plantId}") {
        fun createRoute(plantId: Long) = "plant_details/$plantId"
    }
}