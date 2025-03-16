import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Toggle} from '@ui-kitten/components';
import * as Yup from 'yup';

const FormikYup = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Zorunlu Alan'),
    surname: Yup.string().required('Zorunlu Alan'),
    email: Yup.string()
      .required('Zorunlu Alan')
      .email('Lütfen geçerli bir email adresi giriniz.!!'),
    phone: Yup.string()
      .required('Zorunlu Alan')
      .min(10, 'Lütfen minimum 10 hane olarak giriniz')
      .max(11, 'Lütfen maksimum 11 hane olarak giriniz'),
    password: Yup.string()
      .required('Zorunlu Alan')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir, ayrıca 8-40 karakter uzunluğunda olmalıdır',
      ),
    passwordConfirm: Yup.string()
      .required('Zorunlu Alan')
      .oneOf([Yup.ref('password')], 'Şifreler uyuşmuyor'),
    agrementConfirm: Yup.bool()
      .required('Zorunlu Alan')
      .oneOf([true], 'Sözleşmeyi onaylamanız gerekiyor'),
  });

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
            }}
            onSubmit={values =>
              Alert.alert('Form Değerleri', JSON.stringify(values, null, 2))
            }
            validationSchema={registerSchema}>
            {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
              <View>
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  label={'İsim:'}
                  placeholder="İsim bilgisini giriniz.."
                  status={errors.name ? 'danger' : 'basic'}
                  caption={errors.name}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.surname}
                  onChangeText={handleChange('surname')}
                  label={'Soyisim:'}
                  placeholder="Soyisim bilgisini giriniz.."
                  status={errors.surname ? 'danger' : 'basic'}
                  caption={errors.surname}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  label={'E-Mail:'}
                  placeholder="Email bilgisini giriniz.."
                  status={errors.email ? 'danger' : 'basic'}
                  caption={errors.email}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  label={'Telefon:'}
                  placeholder="Telefon bilgisini giriniz.."
                  status={errors.phone ? 'danger' : 'basic'}
                  caption={errors.phone}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  label={'Şifre:'}
                  placeholder="Şifre bilgisini giriniz.."
                  status={errors.password ? 'danger' : 'basic'}
                  caption={errors.password}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.passwordConfirm}
                  onChangeText={handleChange('passwordConfirm')}
                  label={'Şifre Onaylama:'}
                  placeholder="Şifre tekrarını giriniz.."
                  status={errors.passwordConfirm ? 'danger' : 'basic'}
                  caption={errors.passwordConfirm}
                />
                <View>
                  <Toggle
                    checked={values.agrementConfirm}
                    onChange={value => setFieldValue('agrementConfirm', value)}>
                    Kullanıcı Gizlilik Anlaşmasını Kabul Ediyorum.
                  </Toggle>
                  {errors.agrementConfirm && (
                    <Text style={{color: 'red'}}>{errors.agrementConfirm}</Text>
                  )}
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
