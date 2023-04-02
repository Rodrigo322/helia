import { ArrowLeft } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import FacebookLogo from "../../assets/facebook-logo.svg";
import GoogleLogo from "../../assets/google-logo.svg";

export function AccountSetup() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
      </View>
      <Text style={styles.wellcome}>Bem vindo ao Helia</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TabRoutes")}
          style={styles.contentButton}
        >
          <FacebookLogo width={35} height={35} />
          <Text style={styles.contentButtonText}>Entrar com Facabook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TabRoutes")}
          style={styles.contentButton}
        >
          <GoogleLogo width={35} height={35} />
          <Text style={styles.contentButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContainerSeparator}>
        <View style={styles.separator} />
        <Text style={styles.ContainerSeparatorText}> ou </Text>
        <View style={styles.separator} />
        <View />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={styles.buttonSignIn}
      >
        <Text style={styles.buttonSignInText}>Entrar com E-mail e Senha</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não possui conta?</Text>
        <TouchableOpacity>
          <Text style={styles.footerButtonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    marginTop: 80,
  },
  wellcome: {
    color: "#f4f4f4",
    marginTop: 80,
    fontSize: 24,
    fontWeight: "600",
  },
  content: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    gap: 20,
  },
  contentButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#1F222A",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  contentButtonText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  ContainerSeparator: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#757575",
    width: 150,
  },
  ContainerSeparatorText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonSignIn: {
    backgroundColor: "#1ab55c",
    width: "100%",
    height: 56,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  buttonSignInText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginTop: 80,
    flexDirection: "row",
    gap: 10,
  },
  footerText: {
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "300",
  },
  footerButtonText: {
    color: "#1ab55c",
    fontSize: 14,
    fontWeight: "600",
  },
});
