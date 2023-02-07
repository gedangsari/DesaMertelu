<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Umkm extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'description' => $this->description,
            'description2' => $this->description2,
            'imageUrl' => $this->imageUrl,
            'imageUrl2' => $this->imageUrl2,
            'imageUrl3' => $this->imageUrl3,
            'imageUrl4' => $this->imageUrl4,
            'imageUrl5' => $this->imageUrl5,
            'note' => $this->note,
            'created_at' => $this->created_at->format('m/d/Y'),
            'updated_at' => $this->updated_at->format('m/d/Y'),
        ];
    }
}
