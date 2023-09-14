import css from './home.module.css'
import Section from 'components/Section/Section'

const Home = () => {

    return (
        <Section title='Phonebook'>
            
            <p className={css.app_descr}>
                Simple and user-friendly application designed to help
                you manage your contacts effortlessly. Easily add, edit, and
                organize your contacts' names and phone numbers in one place.
                With a powerful search feature, finding the right contact is
                quick and convenient. Say goodbye to paper-based address books
                and enjoy the convenience of digital contact management with PhoneBook.
            </p>
        </Section>
    )
}
export default Home