import { Pressable, Text } from "react-native";
import {
    Button,
    ButtonText,
    ButtonSpinner,
    ButtonIcon,
    ButtonGroup,
  } from '@/components/ui/button';
  import { Card } from "@/components/ui/card";
  import { Image } from "@/components/ui/image";
  import { VStack } from "@/components/ui/vstack";
  import { Heading } from "@/components/ui/heading";
  import { Box } from "@/components/ui/box";
import { Link } from "expo-router";


  


export default function ProductListItem ({product}) {
    return (
        <Link href={`/product/${product.id}`} asChild>
            <Pressable className="flex-1">
        <Card className="p-5 rounded-lg max-w-[360px] flex-1">

      <Image
        source={{
          uri: product.image,
        }}
        className="mb-6 h-[240px] w-full rounded-md"
        alt={`${product.name} image`}
        resizeMode="contain"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        {product.name}
      </Text>
    
        <Heading size="md" className="mb-4">
          ${product.price}
        </Heading>
    </Card>
    </Pressable>
    </Link>
    )
}
