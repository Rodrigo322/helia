import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, EnvelopeSimple, Eye, LockKey } from "phosphor-react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import FacebookLogo from "../../assets/facebook-logo.svg";
import GoogleLogo from "../../assets/google-logo.svg";

export function SignIn() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate.goBack()} style={styles.header}>
        <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
      </TouchableOpacity>
      <Text style={styles.wellcome}>Faça login na sua conta</Text>

      <View style={styles.content}>
        <View style={styles.contentInput}>
          <EnvelopeSimple size={32} color="#757575" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Seu e-mail"
          />
        </View>

        <View style={styles.contentInput}>
          <LockKey size={32} color="#757575" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Seu e-mail"
          />
          <Eye size={32} color="#757575" />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonSignIn}>
        <Text style={styles.buttonSignInText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.ContainerSeparator}>
        <View style={styles.separator} />
        <Text style={styles.ContainerSeparatorText}> ou continuar com </Text>
        <View style={styles.separator} />
        <View />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <GoogleLogo width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FacebookLogo width={30} height={30} />
        </TouchableOpacity>
      </View>

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
    alignSelf: "flex-start",
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
  contentInput: {
    width: "100%",
    height: 56,
    backgroundColor: "#1F222A",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: { flex: 1, color: "#757575" },
  ContainerSeparator: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#757575",
    flex: 1,
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
    marginTop: 40,
  },
  buttonSignInText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
  footerButton: {
    width: 100,
    height: 60,
    backgroundColor: "#1F222A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
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
