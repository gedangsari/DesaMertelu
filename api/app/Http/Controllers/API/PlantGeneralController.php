<?php
   
namespace App\Http\Controllers\API;
   
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Plant;
use App\Http\Resources\Plant as PlantResource;
   
class PlantGeneralController extends BaseController
{
    public function show($id)
    {
        $plant = Plant::find($id);
        if (is_null($plant)) {
            return $this->sendError('Plant does not exist.');
        }
        return $this->sendResponse(new PlantResource($plant), 'Plant fetched.');
    }
}