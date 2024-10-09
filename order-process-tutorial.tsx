import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, AlertCircle, Mail } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const orderSteps = [
  {
    title: "ケーキを選んで注文",
    steps: [
      {
        title: "HPの画面のWEB予約ボタンをタップ",
        description: "ケーキの予約ページへ遷移します。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-TyJIkbODAgfeBQvU8QKL3pjBSPkKqo.png"
      },
      {
        title: "商品を選んでカートに追加",
        description: "画面をスクロールして欲しい商品を選びます。在庫状況、個数、メッセージプレートを入力してカートに追加を選ぶ。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-xLQeNSjU94ZghCuJqJrDPze4NYZd7k.png"
      }
    ]
  },
  {
    title: "ログインと注文確認",
    steps: [
      {
        title: "ログイン",
        description: "カートボタンをタップするとログイン画面へ遷移されます。画面からGoogleのマークを押してログインをしてください。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-4H8YHftzIH0B85RIVXd7zydyBXrEqk.png"
      },
      {
        title: "Googleアカウントでログイン",
        description: "ログイン画面を進んで、ご自身のメールアドレスを確認したら次へをタップします。ログインができたら右上にGoogleに登録の名前が出てきます。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-txmFh52LdYL1lUXJrPqzzClA5Druj2.png"
      },
      {
        title: "カートの確認",
        description: "ログインが確認できたら、レジに進むタップ。カートの商品の中身をチェックしたらレジに進むを押してください。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-kYVnPEKAB7icvG8HlAZolWkXmOSDF9.png"
      }
    ]
  },
  {
    title: "支払いと完了",
    steps: [
      {
        title: "受け取り時間の設定と支払い",
        description: "受け取り時間などの設定が終えたら購入するをタップ。画面がPayPalに切り替わったらお支払いをしてください。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8F%97%E3%81%91%E5%8F%96%E3%82%8A%E6%99%82%E9%96%93-12b1GET8wka5mptKDmDtvy98MYu9gB.png"
      },
      {
        title: "支払い完了",
        description: "支払いが終わりましたら、元の画面に戻ります。画面に下に緑のバーで支払い完了が表示されます。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-2oximvAJ0JFBQGq6y7q5WeLWFDWobn.png"
      },
      {
        title: "予約完了",
        description: "メールを確認して予約完了です。",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-ycaDQMBEBgwbxaTAkTjkoeBrV02MXo.png"
      }
    ]
  }
]

const preOrderConfirmation = {
  title: "ご予約前の事前確認",
  items: [
    "ご予約にGoogleのメールアドレスが必要になります。お持ちでない方は作成後してご利用ください。",
    "LINEなどアプリケーションから直接ケーキWEB予約URLでサイトを開かれた際に、スマートフォン等の設定により正しく画面が表示されない場合があります。その場合は、デフォルトのブラウザで開くなど操作を行ってください。",
    "現在もサービスのアップデートを行なっております。気になる点がありましたら、ページ最後のメールアドレスよりご連絡お願いします。"
  ]
}

export default function OrderProcessTutorial() {
  const [expandedStep, setExpandedStep] = useState<string | null>("0")

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-600">ケーキ注文の流れ</CardTitle>
            <CardDescription>簡単3ステップでケーキをご注文いただけます</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>ご予約前の事前確認</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-5 space-y-2">
                  {preOrderConfirmation.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
            <Accordion type="single" collapsible value={expandedStep} onValueChange={setExpandedStep}>
              {orderSteps.map((mainStep, mainIndex) => (
                <AccordionItem key={mainIndex} value={mainIndex.toString()}>
                  <AccordionTrigger className="text-lg font-semibold text-pink-700">
                    STEP {mainIndex + 1}: {mainStep.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {mainStep.steps.map((subStep, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h4 className="text-md font-semibold mb-2">{subStep.title}</h4>
                        <p className="text-gray-600 mb-2">{subStep.description}</p>
                        <img
                          src={subStep.image}
                          alt={`Step ${mainIndex + 1}.${subIndex + 1}`}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-600">お問い合わせ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">WEB予約システムのご利用にあたり、不明な点やエラーが発生した場合は対応させていただきます。</p>
            <p className="mb-4">お手数ですが、下記のメールアドレスまでお問い合わせください。よろしくお願いいたします。</p>
            <Button variant="outline" className="flex items-center" asChild>
              <a href="mailto:info@gadandan.co.jp">
                <Mail className="mr-2 h-4 w-4" />
                info@gadandan.co.jp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}