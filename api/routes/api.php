<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\PariwisataController;
use App\Http\Controllers\API\UmkmController;
use App\Http\Controllers\API\PlantController;

use App\Http\Controllers\API\ContactGeneralController;
use App\Http\Controllers\API\PariwisataGeneralController;
use App\Http\Controllers\API\UmkmGeneralController;
use App\Http\Controllers\API\PlantGeneralController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);

Route::resource('d/contacts', ContactGeneralController::class);
Route::resource('d/pariwisata', PariwisataGeneralController::class);
Route::resource('d/umkm', UmkmGeneralController::class);
Route::resource('d/plants', PlantGeneralController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('contacts', ContactController::class);
    Route::resource('pariwisata', PariwisataController::class);
    Route::resource('umkm', UmkmController::class);
    Route::resource('plants', PlantController::class);
});