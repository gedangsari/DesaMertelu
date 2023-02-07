<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plants', function (Blueprint $table) {
            $table->id();
            $table->string('localName');
            $table->string('scientificName');
            $table->string('kingdom');
            $table->string('division');
            $table->string('subdivision');
            $table->string('class');
            $table->string('order');
            $table->string('family');
            $table->string('genus');
            $table->string('species');
            $table->text('description');
            $table->string('imageUrl');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plants');
    }
};
