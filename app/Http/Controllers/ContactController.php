<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(ContactRequest $request){
        Contact::create([
            'name' => $request->name,
            'zip' => $request->zip,
            'address' => $request->address,
            'company' => $request->company,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message
        ]);

        return redirect()->route('contact')
            ->with(['message'=> 'お問い合わせが完了しました。', 'status' => 'info']);
    }
}
