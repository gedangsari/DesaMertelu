<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Umkm;
use App\Http\Resources\Umkm as UmkmResource;
   
class UmkmController extends BaseController
{
    public function index()
    {
        $umkm = Umkm::all();
        return $this->sendResponse(UmkmResource::collection($umkm), 'UMKMs fetched.');
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required',
            'imageUrl' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $umkm = Umkm::create($input);
        return $this->sendResponse(new UmkmResource($umkm), 'UMKM created.');
    }
   
    public function show($id)
    {
        $umkm = Umkm::find($id);
        if (is_null($umkm)) {
            return $this->sendError('UMKM does not exist.');
        }
        return $this->sendResponse(new UmkmResource($umkm), 'UMKM fetched.');
    }
    
    public function update(Request $request, Umkm $umkm)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required',
            'imageUrl' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $umkm->title = $input['title'];
        $umkm->subtitle = $input['subtitle'];
        $umkm->description = $input['description'];
        $umkm->description2 = $input['description2'];
        $umkm->imageUrl = $input['imageUrl'];
        $umkm->imageUrl2 = $input['imageUrl2'];
        $umkm->imageUrl3 = $input['imageUrl3'];
        $umkm->imageUrl4 = $input['imageUrl4'];
        $umkm->imageUrl5 = $input['imageUrl5'];
        $umkm->note = $input['note'];
        $umkm->save();
        
        return $this->sendResponse(new UmkmResource($umkm), 'UMKM updated.');
    }
   
    public function destroy(Umkm $umkm)
    {
        $umkm->delete();
        return $this->sendResponse([], 'UMKM deleted.');
    }
}