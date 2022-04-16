<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LineMessageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

Route::post('/store', [ContactController::class, 'store']);

Route::post('/line/webhook', [LineMessageController::class, 'webhook'])->name('line.webhook');

Route::post('/sendLineMessage', [LineMessageController::class, 'sendLineMessage']);

Route::post('/sample', [ContactController::class, 'sample']);

Route::post('/temSample', function () {
    return view('contact.temporaryConfirm');
});