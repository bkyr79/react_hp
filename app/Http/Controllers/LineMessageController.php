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
        $message_content=$inputs['events'][0]['message']['text'];

        // メッセージが送られた場合、$message_typeは'message'となる。その場合処理実行。
        if($message_type=='message') {
            
            // replyTokenを取得
            $reply_token=$inputs['events'][0]['replyToken'];

            // LINEBOTSDKの設定
            $http_client = new CurlHTTPClient(config('services.line.channel_token'));
            $bot = new LINEBot($http_client, ['channelSecret' => config('services.line.messenger_secret')]);

            // 送信するメッセージの設定            
            $reply_message = 'いただいたメッセージ『'.$message_content
            .'』に関しまして、システムが整い次第対応いたします。それまでしばらくお待ちくださいませ🙇‍♂️';

            // ユーザーの送信メッセージに応じて、応答メッセージを変えることもできる
            // （仮に、送信メッセージが'リピート'の場合に$orderの中身を返してみる）
            // if($message_content === 'リピート'){
            //     $order = [
            //         "ordering_details" => "・ミラノ風ドリア",
            //         "ordering_details2" => "・辛味チキン",
            //     ];
            //     $reply_message = $order['ordering_details']."\n".$order['ordering_details2'];
            // }

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

        // 仮の注文データ
        // $ordering_details = $request->ordering_details;
        // $ordering_details2 = $request->ordering_details2;
        $ordering_details88 = $request->ordering_details88;
        $count              = $request->count;

        // メッセージ設定
        // $message = "以下のご注文を受け付けました"."\n".$ordering_details."\n".$ordering_details2;
        $message = 
                "以下のご注文を受け付けました".
                "\n".$ordering_details88.
                "\n".$count;

        // メッセージ送信
        $textMessageBuilder = new TextMessageBuilder($message);
        $response = $bot->pushMessage($userId, $textMessageBuilder);
    }    
}