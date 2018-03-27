import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import Container from '../components/Container/Container';
import Logo from '../components/Logo/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import ClearButton from '../components/Buttons/ClearButton';
import LastConverted from '../components/Text/LastConverted';
import Header from '../components/Header/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
    handlePressBaseCurrency = () => {
      console.log('press base');
    }

    handlePressQuoteCurrency = () => {
      console.log('press quote');
    }

    handleTextChange = () => {
      console.log('change text');
    }

    handleSwapCurrency = () => {
      console.log('Swap Currency');
    }

    handleOptionsPress = () => {
      console.log('Handle Options Press');
    }

    render() {
      return (
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton
              buttonText={TEMP_BASE_CURRENCY}
              onPress={this.handlePressBaseCurrency}
              defaultValue={TEMP_BASE_PRICE}
              keyboardType="numeric"
              onChangeText={this.handleTextChange}
            />
            <InputWithButton
              buttonText={TEMP_QUOTE_CURRENCY}
              onPress={this.handlePressQuoteCurrency}
              editable={false}
              value={TEMP_QUOTE_PRICE}
            />
            <LastConverted
              base={TEMP_BASE_CURRENCY}
              quote={TEMP_QUOTE_CURRENCY}
              date={TEMP_CONVERSION_DATE}
              conversionRate={TEMP_CONVERSION_RATE}
            />
            <ClearButton
              text="Reverse Currencies"
              onPress={this.handleSwapCurrency}
            />
          </KeyboardAvoidingView>
        </Container>
      );
    }
}

export default Home;
