"""Feriados nacionais brasileiros (e dias sem pregão na B3 que param o mercado), sem dependências externas."""
from __future__ import annotations

from datetime import date, timedelta


def easter(year: int) -> date:
    """Domingo de Páscoa (algoritmo anônimo gregoriano)."""
    a, b, c = year % 19, year // 100, year % 100
    d, e = b // 4, b % 4
    f = (b + 8) // 25
    g = (b - f + 1) // 3
    h = (19 * a + b - d - g + 15) % 30
    i, k = c // 4, c % 4
    l = (32 + 2 * e + 2 * i - h - k) % 7
    m = (a + 11 * h + 22 * l) // 451
    month = (h + l - 7 * m + 114) // 31
    day = ((h + l - 7 * m + 114) % 31) + 1
    return date(year, month, day)


def br_holidays(year: int) -> dict[date, str]:
    p = easter(year)
    return {
        date(year, 1, 1): "Confraternização Universal",
        p - timedelta(days=48): "Carnaval",
        p - timedelta(days=47): "Carnaval",
        p - timedelta(days=2): "Sexta-feira Santa",
        date(year, 4, 21): "Tiradentes",
        date(year, 5, 1): "Dia do Trabalho",
        p + timedelta(days=60): "Corpus Christi",
        date(year, 9, 7): "Independência",
        date(year, 10, 12): "Nossa Senhora Aparecida",
        date(year, 11, 2): "Finados",
        date(year, 11, 15): "Proclamação da República",
        date(year, 11, 20): "Consciência Negra",
        date(year, 12, 25): "Natal",
    }


def holiday_name(d: date) -> str | None:
    return br_holidays(d.year).get(d)
