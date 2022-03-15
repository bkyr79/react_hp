<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function confirm(Request $request){
        $inputs = $request->all();

        return view('contact.confirm', [
            'inputs' => $inputs,
        ]);
    }

    public function store(Request $request){
        Contact::create([
            'name' => $request->name,
            'zip' => $request->postCodeH,
            'address' => $request->prefectures,
            'company' => $request->company,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->content
        ]);

        return redirect()->route('contact')
            ->with(['message'=> 'お問い合わせが完了しました。', 'status' => 'info']);
    }

    public function sample(Request $request){
        $data = $request['name'];   // 「名前」の入力値を取り出す

        return view("sample", [
            response()->json(["data" => $data])
        ]);  
        // return response()->json([$request->all()]);      
    }
}
