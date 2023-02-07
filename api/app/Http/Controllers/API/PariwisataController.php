<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Pariwisata;
use App\Http\Resources\Pariwisata as PariwisataResource;
   
class PariwisataController extends BaseController
{
    public function index()
    {
        $pariwisata = Pariwisata::all();
        return $this->sendResponse(PariwisataResource::collection($pariwisata), 'Pariwisatas fetched.');
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
        $pariwisata = Pariwisata::create($input);
        return $this->sendResponse(new PariwisataResource($pariwisata), 'Pariwisata created.');
    }
   
    public function show($id)
    {
        $pariwisata = Pariwisata::find($id);
        if (is_null($pariwisata)) {
            return $this->sendError('Pariwisata does not exist.');
        }
        return $this->sendResponse(new PariwisataResource($pariwisata), 'Pariwisata fetched.');
    }
    
    public function update(Request $request, Pariwisata $pariwisata)
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
        $pariwisata->title = $input['title'];
        $pariwisata->subtitle = $input['subtitle'];
        $pariwisata->description = $input['description'];
        $pariwisata->imageUrl = $input['imageUrl'];
        $pariwisata->imageUrl2 = $input['imageUrl2'];
        $pariwisata->note = $input['note'];
        $pariwisata->save();
        
        return $this->sendResponse(new PariwisataResource($pariwisata), 'Pariwisata updated.');
    }
   
    public function destroy(Pariwisata $pariwisata)
    {
        $pariwisata->delete();
        return $this->sendResponse([], 'Pariwisata deleted.');
    }
}