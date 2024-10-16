import {
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useCallback } from 'react';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Feather from 'react-native-vector-icons/Feather';
import { useThemeColors } from '@/hooks/useTheme';
import FloatingInput from '@/components/FloatingInput';
import { MainStack } from '@/utils/ParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '@/components/Button';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginMutation } from '@/state/services/auth.service';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/state/reducers/user.reducer';

const schema = yup
  .object({
    username: yup.string().max(255).required('Email/Username is required'),
    password: yup.string().max(255).required('Password is required'),
    url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Please enter a valid website',
      ),
  })
  .required();

interface Props {
  navigation: NativeStackNavigationProp<MainStack, 'PostSplash'>;
}

const LoginScreen = ({ navigation }: Props) => {
  const { pitch } = useThemeColors();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    // getValues,
    watch,
  } = useForm({
    defaultValues: {
      username: '',
      url: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const stripHttpString = (string: string) => {
    return string
      .replaceAll('https://', '')
      .replaceAll('http://', '')
      .replaceAll('https:/', '')
      .replaceAll('http:/', '')
      .replaceAll('http:', '')
      .replaceAll('https:', '')
      .replaceAll('https', '')
      .replaceAll('http', '');
  };

  const submit = useCallback(
    async (cred: any) => {
      try {
        const body = new FormData();
        body.append('usr', cred.username);
        body.append('pwd', cred.password);
        const response = await login({
          body,
        });
        //debug
        // console.log('response', JSON.stringify(response));
        if ((response as any)?.error) {
          const err = response as any;
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: err?.error?.data?.message || 'Something went wrong',
          });
          return;
        }
        dispatch(
          setCredentials({
            user: {
              full_name: response.data?.full_name,
            },
          }),
        );
        // navigation.pop();
        // navigation.navigate('Tabs', {
        //   screen: 'Shipments',
        // });
      } catch (error) {
        console.log(error);
      }
    },
    [login, dispatch],
  );

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1} justifyContent="space-between">
          <Box>
            <Box
              flexDirection="row"
              alignItems="center"
              paddingHorizontal="m"
              marginTop="mid">
              <TouchableOpacity onPress={navigation.goBack}>
                <Box
                  flexDirection="row"
                  paddingVertical="mid"
                  gap="xs"
                  alignItems="center">
                  <Feather name="chevron-left" size={18} color={pitch} />
                  <Text color="pitch">Cancel</Text>
                </Box>
              </TouchableOpacity>
            </Box>
            <Box marginBottom="m" paddingHorizontal="m">
              <Text fontSize={34} variant="semibold">
                Login
              </Text>
            </Box>
            <Box paddingHorizontal="m" marginBottom="xl">
              <Text fontSize={17} color="faded">
                Please enter your First, Last name and your phone number in
                order to register
              </Text>
            </Box>
            <Box paddingHorizontal="m">
              <Box>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="url"
                  render={({ field: { onChange, value } }) => (
                    <FloatingInput
                      autoCapitalize="none"
                      label="URL"
                      value={
                        value ? 'https://' + stripHttpString(value) : value
                      }
                      onChangeText={v => {
                        onChange(stripHttpString(v));
                      }}
                      error={errors.url?.message}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="username"
                  render={({ field: { onChange, value } }) => (
                    <FloatingInput
                      label="Username / Email"
                      value={value}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      error={errors.username?.message}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <FloatingInput
                      label="Password"
                      value={value}
                      onChangeText={onChange}
                      isPassword
                      error={errors.password?.message}
                    />
                  )}
                />
              </Box>
            </Box>
          </Box>
          <Box paddingHorizontal="m" marginBottom="mxl">
            <Button
              disabled={
                !watch('url') || !watch('username') || !watch('password')
              }
              displayText="Login"
              onPress={handleSubmit(submit)}
              loading={isLoading}
            />
          </Box>
        </Box>
        <Toast />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
