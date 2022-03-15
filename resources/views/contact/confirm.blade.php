@extends('layouts.layout')
@section('title', '確認ページ')

@section('stylesheet')
  {{-- <link href="{{ asset('/css/item_list.css') }}" rel="stylesheet" type="text/css"> --}}
  <script src="{{ asset('js/app.js') }}" defer></script>
@endsection

@section('content')
<form method="POST" action="{{ route('contact.send') }}">
    @csrf

    <label>ご氏名</label>
    {{ $inputs['name'] }}
    <input
        name="name"
        value="{{ $inputs['name'] }}"
        type="hidden">

    <label>郵便番号</label>
    {{ $inputs['postCodeH'] }}
    <input
        name="postCodeH"
        value="{{ $inputs['postCodeH'] }}"
        type="hidden">

    <label>住所１</label>
    {{ $inputs['prefectures'] }}
    <input
        name="prefectures"
        value="{{ $inputs['prefectures'] }}"
        type="hidden">

    <label>住所２</label>
    {{ $inputs['addrdetail'] }}
    <input
        name="addrdetail"
        value="{{ $inputs['addrdetail'] }}"
        type="hidden">
            
    <label>会社名</label>
    {{ $inputs['company'] }}
    <input
        name="company"
        value="{{ $inputs['company'] }}"
        type="hidden">

    <label>メールアドレス</label>
    {{ $inputs['email'] }}
    <input
        name="email"
        value="{{ $inputs['email'] }}"
        type="hidden">            

    <label>件名</label>
    {{ $inputs['subject'] }}
    <input
        name="subject"
        value="{{ $inputs['subject'] }}"
        type="hidden">

    <label>お問い合わせ内容</label>
    {!! nl2br(e($inputs['content'])) !!}
    <input
        name="content"
        value="{{ $inputs['content'] }}"
        type="hidden">

    <button type="submit" name="action" value="back">
        入力内容修正
    </button>
    <button type="submit" name="action" value="submit">
        送信する
    </button>
</form>
@endsection