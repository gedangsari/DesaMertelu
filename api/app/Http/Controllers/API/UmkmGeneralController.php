<?php
   
namespace App\Http\Controllers\API;
   
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Umkm;
use App\Http\Resources\Umkm as UmkmResource;
   
class UmkmGeneralController extends BaseController
{
    
    public function index()
    {
        $umkm = Umkm::all();
        return $this->sendResponse(UmkmResource::collection($umkm), 'UMKMs fetched.');
    }
}