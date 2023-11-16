<?php
use App\Http\Controllers\NewsController;

Route::get('/news', [NewsController::class, 'getNews']);

Route::get('/showNews', [NewsController::class, 'showNews']);

Route::get('/getNewsWithParent/{parentId}', [NewsController::class, 'getNewsWithParent']);
