<?php


use Illuminate\Database\Seeder;
use App\Models\News;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        News::factory(200)->create();
    }
}



