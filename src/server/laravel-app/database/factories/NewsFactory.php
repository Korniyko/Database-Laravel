<?php

namespace Database\Factories;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{
    protected $model = News::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'parent_id' => $this->faker->boolean(50) ? $this->faker->numberBetween(1, 200) : null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}