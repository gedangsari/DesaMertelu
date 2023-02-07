<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Umkm extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 
        'subtitle',
        'description',
        'description2',
        'imageUrl',
        'imageUrl2',
        'imageUrl3',
        'imageUrl4',
        'imageUrl5',
        'note',
    ];    

    public $table = "umkm_content";
}