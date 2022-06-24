import Title from './components/Title'
import Input from './components/Input/Input';
import Alert from './components/Alert/Alert';
import Card from './components/Card/Card';
import Write from './components/Write/Write';

export default function App() {
    return (
        <>
            <Title title='Inputs' level='h2' className='title'/>
            

            <Write />

            {/* <Input 
                label='email'
                type='email'
                placeholder='enter your mail'
                size='large'
                isError='true'
            />
            <Input 
                label='phone number'
                type='tel'
                placeholder='enter your number'
                size='large'
                value='+380'
            />

            <Title title='Alerts' level='h2' />
            <Alert type='is-danger-alert' msg='something went wrong!' />
            <Alert type='is-primary-alert' msg='something went successfully!' />

            <Title title='Cards' level='h2' />

            <div className='flex'> 
                <Card>
                    Hello!
                </Card>
                <Card image='https://rsv.ru/blog/wp-content/uploads/2021/11/perevodchik-918x516.jpg' alt='card image'>
                    Some text 
                </Card>
                <Card image='https://3dnews.ru/assets/external/illustrations/2021/04/05/1036581/234324.jpg' alt='card image'>
                    Some text 
                </Card>
                <Card image='https://wallpaperaccess.com/full/147522.jpg' alt='card image'>
                    Some text 
                </Card>
                <Card image='https://autovogdenie.ru/wp-content/uploads/2016/04/2-1-296x340.jpg' alt='card image'>
                    Some text 
                </Card>
                <Card>
                    Bye!
                </Card>
            </div> */}
 
        </>
    ) 
}

