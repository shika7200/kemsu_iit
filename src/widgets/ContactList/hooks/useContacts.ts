import { useState, useCallback, useEffect } from 'react';
import { fetchContacts } from '../actions';
import { Contact } from '../types';

 const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContactsCallback = useCallback(async () => {
    const fetchedContacts = await fetchContacts();
    setContacts(fetchedContacts);
  }, []);

  useEffect(() => {
    fetchContactsCallback();
  }, [fetchContactsCallback]);

  return {
    contacts,
    fetchContacts: fetchContactsCallback,
  };
};
export default useContacts;