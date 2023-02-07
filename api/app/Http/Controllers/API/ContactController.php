<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Contact;
use App\Http\Resources\Contact as ContactResource;
   
class ContactController extends BaseController
{
    public function index()
    {
        $contact = Contact::all();
        return $this->sendResponse(ContactResource::collection($contact), 'Contacts fetched.');
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $contact = Contact::create($input);
        return $this->sendResponse(new ContactResource($contact), 'Contact created.');
    }
   
    public function show($id)
    {
        $contact = Contact::find($id);
        if (is_null($contact)) {
            return $this->sendError('Contact does not exist.');
        }
        return $this->sendResponse(new ContactResource($contact), 'Contact fetched.');
    }
    
    public function update(Request $request, Contact $contact)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $contact->name = $input['name'];
        $contact->phone = $input['phone'];
        $contact->email = $input['email'];
        $contact->save();
        
        return $this->sendResponse(new ContactResource($contact), 'Contact updated.');
    }
   
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return $this->sendResponse([], 'Contact deleted.');
    }
}