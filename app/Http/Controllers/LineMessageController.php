<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use LINE\LINEBot;
use LINE\LINEBot\HTTPClient\CurlHTTPClient;
use LINE\LINEBot\MessageBuilder\TextMessageBuilder;


class LineMessageController extends Controller
{
    public function webhook(Request $request) {
        // LINEから送られた内容を$inputsに代入
        $inputs=$request->all();

        // そこからtypeをとりだし、$message_typeに代入
        $message_type=$inputs['events'][0]['type'];

        // メッセージが送られた場合、$message_typeは'message'となる。その場合処理実行。
        if($message_type=='message') {
            
            // replyTokenを取得
            $reply_token=$inputs['events'][0]['replyToken'];

            // LINEBOTSDKの設定
            $http_client = new CurlHTTPClient(config('services.line.channel_token'));
            $bot = new LINEBot($http_client, ['channelSecret' => config('services.line.messenger_secret')]);

            // 送信するメッセージの設定
            $reply_message='メッセージありがとうございます';

            // ユーザーにメッセージを返す
            $reply=$bot->replyText($reply_token, $reply_message);
            
            return 'ok';
        }
    }

    // メッセージ送信用
    public function sendLineMessage(Request $request) {    
        // LINEBOTSDKの設定
        $http_client = new CurlHTTPClient(config('services.line.channel_token'));
        $bot = new LINEBot($http_client, ['channelSecret' => config('services.line.messenger_secret')]);

        // LINEユーザーID指定
        $userId = config('services.line.sample_user_id');

        $ordering_details = $request->ordering_details;
        $ordering_details2 = $request->ordering_details2;
        // メッセージ設定
        $message = "以下のご注文を受け付けました"."\n".$ordering_details."\n".$ordering_details2;

        // メッセージ送信
        $textMessageBuilder = new TextMessageBuilder($message);
        $response = $bot->pushMessage($userId, $textMessageBuilder);
    }    
}