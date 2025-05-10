"use client"; // クライアントコンポーネントとしてマーク

import { useState, useEffect } from "react";
import { Text, VStack, Center } from "@chakra-ui/react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1秒ごとに時間を更新するタイマーを設定
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // コンポーネントがアンマウントされる時にタイマーをクリア
    return () => {
      clearInterval(timerId);
    };
  }, []); // 空の依存配列で、マウント時とアンマウント時にのみ実行

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}時${minutes}分${seconds}秒`;
  };

  return (
    <Center h="100vh" bg="gray.100">
      <VStack
        spacing={4}
        p={{ base: 4, md: 8 }} // スマホではパディング4, PCでは8
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "4xl", md: "6xl" }} // スマホでは4xl, PCでは6xl
          fontWeight="bold"
          fontFamily="mono" // 等幅フォントを指定
          color="gray.700"
        >
          {formatTime(currentTime)}
        </Text>
      </VStack>
    </Center>
  );
}
