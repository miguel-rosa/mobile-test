import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import Screen from "../../components/Screen"
import { useQuery } from "@tanstack/react-query"
import { getAdminUsers } from "../../api/users"
import UsersList from "../../components/UsersList"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../routes"

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home:React.FC<Props> = () => {
  
  const {isLoading, data} = useQuery({
      queryKey: ['adminUsers'],
      queryFn: () => getAdminUsers().then(res => res.json()),
    }
  )
  if(isLoading) (<ActivityIndicator />)

  return (
    <Screen>     
      <UsersList users={data.users}/>
    </Screen>
  )
}

export default Home