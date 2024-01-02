'use client'
import PriceChart from '@/components/PriceChart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <Tabs defaultValue='NA' className='flex flex-col items-center'>
        <TabsList>
          <TabsTrigger value="NA">North America</TabsTrigger>
          <TabsTrigger value="EU">Europe</TabsTrigger>
        </TabsList>
        <TabsContent value="NA">
          <PriceChart />
        </TabsContent>
        <TabsContent value="EU">
          <PriceChart />
        </TabsContent>
      </Tabs>
    </div>
  )
}
