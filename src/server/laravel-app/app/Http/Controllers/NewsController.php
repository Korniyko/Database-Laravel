<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    public function getNews(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $sortBy = $request->input('sort_by', 'created_at');

        $getNews = News::orderBy($sortBy)->paginate($perPage);

        return response()->json($getNews);
    }

    public function getNewsWithParent($parentId)
    {
        $getNews = News::where('parent_id', $parentId)
            ->orWhere('id', $parentId)
            ->get();

        return response()->json($getNews);
    }



    public function showNews()
    {
        $news = News::where('created_at', '>', now()->subDay())
            ->where('updated_at', '<', now()->addDay())
            ->orderBy('created_at')
            ->skip(120)
            ->take(30)
            ->get();

        $result = array();

        $newsArray = $news->toArray();


        if (!empty($newsArray)) {
            for ($i = 0; $i < 3; $i++) {
                $result[] = $newsArray[$i];
            }


            // foreach (array_slice($newsArray, 0, 3) as $item) {
            //     $result[] = $item;
            // }


            // $count = count($newsArray);
            // $index = 0;
            // while ($index < 3 && $index < $count) {
            //     $result[] = $newsArray[$index];
            //     $index++;
            // }
        }

        return response()->json($result);
    }
}
