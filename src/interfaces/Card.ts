export default interface Card {
  cardId: number;
  createdDate: string;
  cardTitle: string;
  amount: number;
  companyName: string;
  inn: number;
  employer: string;
  cardStatusTags: string[];
  employerTags: string[];
}
