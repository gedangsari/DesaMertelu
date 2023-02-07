<?php
   
namespace App\Http\Controllers\API;
   
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Pariwisata;
use App\Http\Resources\Pariwisata as PariwisataResource;
   
class PariwisataGeneralController extends BaseController
{
    
    public function index()
    {
        $pariwisata = Pariwisata::all();
        return $this->sendResponse(PariwisataResource::collection($pariwisata), 'Pariwisatas fetched.');
    }

}