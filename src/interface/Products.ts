export interface Products {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release:      Release;
    tail:         string;
    type:         string;
    id:           string;
    price:        number;
}

export interface Release {
    au: Date;
    eu: Date;
    jp: Date;
    na: Date;
}
