<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pariwisata extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 
        'subtitle', 
        'description',
        'imageUrl',
        'imageUrl2',
        'note',
    ];  

    public $table = "pariwisata_content";  
}