import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import * as SplashScreen from 'expo-splash-screen';

import { useTranslation } from './src/hooks/useTranslation';
import { useCookie } from './src/hooks/useCookie';
import Button from './src/button';
import LoadingView from './src/loadingView';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { t, locale, setLocale, format } = useTranslation();
  const { cookieKey } = useCookie();
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    RIDIBatang: require('./assets/fonts/RIDIBatang.otf'),
  });

  const y = new Date().getFullYear();
  const m = new Date().getMonth();
  const d = new Date().getDate();
  const todayText = format(t('today_is'), y, m + 1, d);

  const locales = ['ko', 'en', 'es', 'ja', 'zh'];

  useEffect(() => {
    if (cookieKey !== '') {
      setIsLoaded(true);
    }
  }, [cookieKey]);

  useEffect(() => {
    if (locale !== null && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [locale, fontsLoaded]);

  if (!isLoaded) {
    return <LoadingView />;
  }

  return (
    <SafeAreaProvider>
      <LottieView
        autoPlay={true}
        source={require('./assets/background.json')}
        resizeMode="cover"
      />
      <SafeAreaView
        edges={['top', 'bottom']}
        style={{
          flex: 1,
        }}
      >
        <TopContainer>
          <TodayText>{todayText}</TodayText>
          <CookieText>{t(cookieKey)}</CookieText>
        </TopContainer>
        <BottomContainer>
          <ButtonsContainer>
            {locales.map((item) => (
              <Button
                key={item}
                onPress={() => setLocale(item)}
                isSelected={locale === item}
                text={item.toUpperCase()}
              />
            ))}
          </ButtonsContainer>
        </BottomContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const TopContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const TodayText = styled.Text`
  position: absolute;
  top: 70px;
  font-family: RIDIBatang;
  font-size: 13px;
  color: #8b658f;
`;

const CookieText = styled.Text`
  margin-left: 30px;
  margin-right: 30px;
  line-height: 34px;
  font-family: RIDIBatang;
  font-size: 22px;
  text-align: center;
  color: #372538;
`;

const BottomContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-bottom: 24px;
`;
