<?php
   
namespace App\Http\Controllers\API;
   
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Contact;
use App\Http\Resources\Contact as ContactResource;
   
class ContactGeneralController extends BaseController
{
    public function index()
    {
        $contact = Contact::all();
        return $this->sendResponse(ContactResource::collection($contact), 'Contacts fetched.');
    }
}