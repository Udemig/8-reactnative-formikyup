import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Toggle} from '@ui-kitten/components';

const FormikYup = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          minHeight: 125,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: '#00E096',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          KAYIT OLUŞTUR
        </Text>
      </View>

      <View style={{flex: 1, padding: 10}}>
        <ScrollView>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              password: '',
              passwordConfirm: '',
              agrementConfirm: '',
            }}>
            {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
              <View>
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  label={'İsim:'}
                  placeholder="İsim bilgisini giriniz.."
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.surname}
                  onChangeText={handleChange('surname')}
                  label={'Soyisim:'}
                  placeholder="Soyisim bilgisini giriniz.."
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  label={'E-Mail:'}
                  placeholder="Email bilgisini giriniz.."
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  label={'Telefon:'}
                  placeholder="Telefon bilgisini giriniz.."
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  label={'Şifre:'}
                  placeholder="Şifre bilgisini giriniz.."
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.passwordConfirm}
                  onChangeText={handleChange('passwordConfirm')}
                  label={'Şifre:'}
                  placeholder="Şifre tekrarını giriniz.."
                />
                <View>
                  <Toggle
                    checked={values.agrementConfirm}
                    onChange={value => setFieldValue('agrementConfirm', value)}>
                    Kullanıcı Gizlilik Anlaşmasını Kabul Ediyorum.
                  </Toggle>
                </View>

                <Button
                  style={{marginTop: 30}}
                  onPress={handleSubmit}
                  status="success">
                  KAYDET
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default FormikYup;

const styles = StyleSheet.create({
  container: {flex: 1},
});
