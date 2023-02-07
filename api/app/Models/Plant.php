<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    use HasFactory;
    protected $fillable = [
        'localName', 
        'scientificName',
        'kingdom',
        'division',
        'subdivision',
        'class',
        'order',
        'family',
        'genus',
        'species',
        'description',
        'imageUrl',
    ];    
}