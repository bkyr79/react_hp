<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id')->unsigned()->comment('ID');
            $table->string('name')->comment('氏名');
            $table->string('zip', 10)->comment('郵便番号');
            $table->string('address')->comment('住所');
            $table->string('company')->comment('会社名');
            $table->string('email')->unique('email')->comment('メールアドレス');
            $table->string('subject')->comment('件名');
            $table->text('message')->comment('問い合わせ内容');
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
        Schema::dropIfExists('contacts');
    }
}
