<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Plant extends JsonResource
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
            'localName' => $this->localName,
            'scientificName' => $this->scientificName,
            'kingdom' => $this->kingdom,
            'division' => $this->division,
            'subdivision' => $this->subdivision,
            'class' => $this->class,
            'order' => $this->order,
            'family' => $this->family,
            'genus' => $this->genus,
            'species' => $this->species,
            'description' => $this->description,
            'imageUrl' => $this->imageUrl,
            'created_at' => $this->created_at->format('m/d/Y'),
            'updated_at' => $this->updated_at->format('m/d/Y'),
        ];
    }
}
