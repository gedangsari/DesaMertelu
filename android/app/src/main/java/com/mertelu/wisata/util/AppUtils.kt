package com.mertelu.wisata.util

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.widget.Toast
import androidx.annotation.StringRes

fun Context?.openBrowser(url: String) {
    Intent(Intent.ACTION_VIEW, Uri.parse(url)).also { intent ->
        this?.startActivity(intent)
    }
}

fun Context?.openWhatsApp(phoneNumber: String) {
    val intent = Intent(Intent.ACTION_VIEW)
    intent.data = Uri.parse("https://wa.me/$phoneNumber")
    this?.startActivity(intent)
}

fun Context?.showToast(@StringRes message: Int) {
    Toast.makeText(this?.applicationContext, message, Toast.LENGTH_LONG).show()
}