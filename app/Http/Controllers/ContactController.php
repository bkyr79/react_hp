<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function confirm(Request $request){
        $inputs = $request->all();

        return view('contact.temporaryConfirm', [
            'inputs' => $inputs,
        ]);
    }

    public function store(Request $request){
        $contact = new Contact;
        
        Contact::create([
            // 'name' => $request->name,
            // 'zip' => $request->postCodeH,
            // 'address' => $request->prefectures,
            // 'company' => $request->company,
            // 'email' => $request->email,
            // 'subject' => $request->subject,
            // 'message' => $request->content
            'name' => '名前',
            'zip' => '郵便番号',
            'address' => '住所',
            'company' => '会社名',
            'email' => 'メールアドレス',
            'subject' => '件名',
            'message' => '内容'

        ]);

        // return redirect()->route('contact')
        //     ->with(['message'=> 'お問い合わせが完了しました。', 'status' => 'info']);
    }

    public function sample(Request $request){
        // return view("sample", [
        //     response()->json(["controllerdata" => $data])
        // ]);  
        // return response()->json([$request->all()]); 

        // return $request->all(); 
        return view('contact.temporaryConfirm');
    }
}
