<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Plant;
use App\Http\Resources\Plant as PlantResource;
   
class PlantController extends BaseController
{
    public function index()
    {
        $plants = Plant::all();
        return $this->sendResponse(PlantResource::collection($plants), 'Plants fetched.');
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'localName' => 'required',
            'scientificName' => 'required',
            'kingdom' => 'required',
            'division' => 'required',
            'subdivision' => 'required',
            'class' => 'required',
            'order' => 'required',
            'family' => 'required',
            'genus' => 'required',
            'species' => 'required',
            'description' => 'required',
            'imageUrl' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $plant = Plant::create($input);
        return $this->sendResponse(new PlantResource($plant), 'Plant created.');
    }
   
    public function show($id)
    {
        $plant = Plant::find($id);
        if (is_null($plant)) {
            return $this->sendError('Plant does not exist.');
        }
        return $this->sendResponse(new PlantResource($plant), 'Plant fetched.');
    }
    
    public function update(Request $request, Plant $plant)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'localName' => 'required',
            'scientificName' => 'required',
            'kingdom' => 'required',
            'division' => 'required',
            'subdivision' => 'required',
            'class' => 'required',
            'order' => 'required',
            'family' => 'required',
            'genus' => 'required',
            'species' => 'required',
            'description' => 'required',
            'imageUrl' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $plant->localName = $input['localName'];
        $plant->scientificName = $input['scientificName'];
        $plant->kingdom = $input['kingdom'];
        $plant->division = $input['division'];
        $plant->subdivision = $input['subdivision'];
        $plant->class = $input['class'];
        $plant->order = $input['order'];
        $plant->family = $input['family'];
        $plant->genus = $input['genus'];
        $plant->species = $input['species'];
        $plant->description = $input['description'];
        $plant->imageUrl = $input['imageUrl'];
        $plant->save();
        
        return $this->sendResponse(new PlantResource($plant), 'Plant updated.');
    }
   
    public function destroy(Plant $plant)
    {
        $plant->delete();
        return $this->sendResponse([], 'Plant deleted.');
    }
}